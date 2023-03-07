import { DarkBg, Wrapper, Modal, CloseBtn, LandingButton, TextFieldStyled, Paragraph } from './LandingModal.styled';
import { IoMdClose } from 'react-icons/io';
import { useRegisterMutation } from '../../../redux/auth/questifyApi';
import { useLoginMutation } from '../../../redux/auth/questifyApi';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { addToken } from '../../../redux/auth/tokenSlice';
import { addUser } from '../../../redux/auth/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Notiflix from 'notiflix';
import validationSchema from '../../../utils/schemas/formValidation.js';

const LandingModal = ({ setIsOpen }) => {
	const [register] = useRegisterMutation();
	const [login] = useLoginMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { handleSubmit, values, handleChange, touched, errors, resetForm } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async values => {
			await register(values)
				.unwrap()
				.then(({ id }) => {
					resetForm();
					setIsOpen(false);
					Notiflix.Notify.success(`Hello ${values.email} in Questify`);
				})

				.catch(() => {
					Notiflix.Notify.warning(`User with ${values.email} already exists`);
				});
			await login(values)
				.unwrap()
				.then(({ accessToken, sid, refreshToken, userData: { email, id, cards } }) => {
					Cookies.set('token', accessToken);
					if (accessToken) {
						dispatch(addUser({ email, id, cards, sid, refreshToken }));
					}
				});
			const token = Cookies.get('token');
			if (token === undefined) {
				return;
			}
			dispatch(addToken(token));
			navigate('/');
			resetForm();
		},
	});
	return (
		<>
			<DarkBg onClick={() => setIsOpen(false)} />
			<Wrapper>
				<Modal>
					<CloseBtn onClick={() => setIsOpen(false)}>
						<IoMdClose />
					</CloseBtn>
					<Paragraph>Registration</Paragraph>
					<form onSubmit={handleSubmit}>
						<TextFieldStyled
							fullWidth
							variant='standard'
							margin='dense'
							id='email'
							name='email'
							label='Email'
							value={values.email}
							onChange={handleChange}
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
						/>
						<TextFieldStyled
							fullWidth
							variant='standard'
							margin='dense'
							id='password'
							name='password'
							label='Password'
							type='password'
							value={values.password}
							onChange={handleChange}
							error={touched.password && Boolean(errors.password)}
							helperText={touched.password && errors.password}
						/>
						<LandingButton color='primary' variant='contained' fullWidth type='submit'>
							go!
						</LandingButton>
					</form>
				</Modal>
			</Wrapper>
		</>
	);
};

export default LandingModal;
