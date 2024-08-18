import mongoose from "mongoose";

const CommunicationSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
      },
      type: {
        type: String,
        enum: ['email', 'phone', 'meeting', 'social media', 'chat', 'video call', 'other'],
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      summary: String,
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    });

export const Communication = mongoose.model("Communication", CommunicationSchema)