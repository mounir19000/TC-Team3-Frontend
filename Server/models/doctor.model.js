import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const appointmentSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, required: true },
});



const patientSchema = new mongoose.Schema({
    FirstName :{
        type:String,
        required:true,

    },       
    BirthDay :{
        type:String,
        required : true
        
    },
    BirthPlace: {
        type : String,
        required : false,
    },
    Age:{
        type : Number ,
        required : true 
    },
    profession : {
        type : String ,
        
    },
    Adress : {
        type : String,
        required : true
    },
    PhoneNumber :{
        type : String,
        required : true,
    },
    Enfant :{
        type : Boolean,
        required : true,
    },
    DossiersMed : [{
        DrName:{
            type : String,
            required : false,
        },
        date :{
            type : String ,
            required : true,
        },
        Prescription:[{
                nom :{
                    type : String ,
                    
                },
                quantity :{
                    type : Number,
                },
            }],
        Diagnostic :{
                type : String ,
                required : false,
        },
        image:{
            type : String ,
            required : false
        },
        result :{
            type: String,
        }
            }],

},
{
    timestamps: true
}

)

const operationSchema = new mongoose.Schema({
    hour: {
        type: String,
        required: true
    },
    date: {
        type: String,  
        required: true
    },
    operation: {
        type: String,
        required: true
    }
});

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date  ,
        required: true
    },
    email:{
        type: String,
        required :true,
        unique: true

    },
    password:{
        type: String,
        required: true
    },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },  
    //email   
    confirmationToken: { type: String },
    isEmailConfirmed: { type: Boolean, default: false },
    profession : {
        type : String ,
       
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    verificationToken: String,

     patients: [patientSchema],
     appointments: [appointmentSchema], 
     history: [operationSchema]
});

doctorSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


const doctorModel = mongoose.model('doctors', doctorSchema);
export default doctorModel;
