import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Lead = new Schema({
    first_name: {
        type: String,
        required: true,

    },

    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true});

export const LeadSchema = model('lead', Lead)