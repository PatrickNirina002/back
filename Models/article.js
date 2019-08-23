const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    id2:{
        type:Number, required:true
    },
    garage:{type:String },
    titre: { type: String, required:true},
    description: { type: String, required:true},
    prix: { type: Number, required:true},
    image:{ type: String, required:true},
    visibilite: Boolean

},
{
    timestamps: true
}
);

module.exports = mongoose.model('poster', UserSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
