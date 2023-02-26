import React from 'react';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/icons-material';
import { InputWrapper, DateTimeBar } from './Inputs.styled';

export const Inputs = ({
    action,
    cardType,
    title,
    onTitleChange,
    dateTime,
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
                    id='create-new-quest'
                    value={title}
                    type='text'
                    onChange={onTitleChange}
                    placeholder={placeholder}
                    autoFocus
                    required
                ></input>
            </InputWrapper>
            <DateTimeBar cardType={cardType}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                        value={dateTime}
                        onChange={(newValue) => { onDateTimeChange(newValue) }}
                        onError={console.log}
                        ampm={false}
                        minDateTime={dayjs()}
                        inputFormat='YYYY-MM-DD, HH:mm'
                        mask='____-__-__, __:__'
                        components={{ OpenPickerIcon: DateRange }}
                        renderInput={(params) => (
                        <TextField {...params} placeholder='Today' />
                        )}
                    />         
                </LocalizationProvider>
            </DateTimeBar>
        </>
    );
};