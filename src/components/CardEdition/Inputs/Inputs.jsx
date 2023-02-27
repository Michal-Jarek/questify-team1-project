import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateRangeIcon  from '@mui/icons-material/DateRange';
import { InputWrapper, DateTimeBar } from './Inputs.styled';

export const Inputs = ({
    action,
    cardType,
    titleValue,
    onTitleChange,
    dateTimeValue,
    onDateTimeChange,
    placeholder,
    onCancel
}) => {
    return (
        <>
            <InputWrapper cardType={cardType}>
                <label
                    htmlFor='create-new-quest'
                    onClick={onCancel}
                >
                    {action} {cardType === 'Task' ? 'Quest' : cardType}
                </label>
                <input
                    value={titleValue}
                    id='create-new-quest'
                    type='text'
                    autoFocus
                    required
                    onChange={onTitleChange}
                    placeholder={placeholder}
                ></input>
            </InputWrapper>
            <DateTimeBar cardType={cardType}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                        value={dateTimeValue}
                        onChange={(newValue) => { onDateTimeChange(newValue) }}
                        onError={console.log}
                        ampm={false}
                        minDateTime={dayjs()}
                        inputFormat='YYYY-MM-DD, HH:mm'
                        mask='____-__-__, __:__'
                        components={{ OpenPickerIcon: DateRangeIcon, }}
                        renderInput={(params) => (
                        <TextField {...params} placeholder='Today' />
                        )}
                    />         
                </LocalizationProvider>
            </DateTimeBar>
        </>
    );
};