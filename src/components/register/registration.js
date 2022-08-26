import React, {useState,setState} from 'react';
import '../../styles/styles.css'
import truckRegister from'../../services/truck_registration' 

function RegistrationForm() {

const [truckName, setTruckName] = useState(null);
const [firstName, setFirstName] = useState(null);
const [lastName, setLastName] = useState(null);
const [email, setEmail] = useState(null);
const [password,setPassword] = useState(null);
const [confirmPassword,setConfirmPassword] = useState(null);
const [type,setType] = useState("Food Truck");
const [cuisine,setCuisine] = useState(null);
const [phone,setPhone] = useState(null);
const [glutenFree,setGlutenFree] = useState(false);
const [vegetarian,setVegetarian] = useState(false);
const [vegan,setVegan] = useState(false);
const [facebook,setFacebook] = useState(null);
const [instagram,setInstagram] = useState(null);
const [website,setWebsite] = useState(null);




const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "truckName"){
        setTruckName(value);
    }
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "type"){
        setType("Food Truck")
    }
    if(id === "cuisine"){
        setCuisine(value);
    }
    if(id === "glutenFree"){
        setGlutenFree(value);
    }
    if(id === "vegetarian"){
        setVegetarian(value);
    }
    if(id === "vegan"){
        setVegan(value);
    }
    if(id === "website"){
        setWebsite(value);
    }
    if(id === "facebook"){
        setFacebook(value);
    }
    if(id === "instagram"){
        setInstagram(value);
    }
    if(id === "phone"){
        setPhone(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}

console.log('In axios test');
const handleSubmit  = () => {
        var data = {
          name: truckName,
          type: type,
          email: email,
          password: password,
          truck_name:truckName,
          owner_first_name: firstName,
          owner_last_name: lastName,
          email_address: email,
          phone_number: phone,
          cuisine: cuisine,
          gf_option:glutenFree,
          veg_option:vegetarian,
          vegan_option: vegan,
          facebook_link: facebook,
          instagram_link:instagram,
          website:website,       

        };

        console.log(data)

        truckRegister.create(data)
          .then(response => {
            this.setState({
              name: response.data.truckName,
              type: response.data.type,
              email: response.data.email,
            });

          })
          .catch(e => {
            console.log(e);
          });



    //truckRegister.create(truckName,firstName,lastName,email,password,confirmPassword,type)
    //console.log(truckName,firstName,lastName,email,password,confirmPassword,type);
}


const toggleVeg = event => {

    setVegetarian(current => !current);
  };
  const toggleVegan = event => {
    setVegan(current => !current);
  };
  const toggleGF = event => {
    setGlutenFree(current => !current);
  };



    return(
      <div className="form">
          <div className="form-body">
              <div className="Truck Name">
                  <label className="form__label" for="truckName">Truck Name </label>
                  <input className="form__input" type="text" value={truckName} onChange = {(e) => handleInputChange(e)} id="truckName" placeholder="Truck Name"/>
              </div>
              <div className="First Name">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
              </div>
              <div className="Last Name">
                  <label className="form__label" for="lasttName">Last Name </label>
                  <input className="form__input" type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="Last Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="phoneNumber">
                  <label className="form__label" for="phoneNumber">Phone Number </label>
                  <input className="form__input" type="text" value={phone} onChange = {(e) => handleInputChange(e)} id="phone" placeholder="Phone Number"/>
              </div>
              <div className="cuisine">
                  <label className="form__label" for="cuisine">Cuisine </label>
                  <input className="form__input" type="text" value={cuisine} onChange = {(e) => handleInputChange(e)} id="cuisine" placeholder="Cuisine"/>
              </div>
              <div className="glutenFree">
                  <label className="form__label" for="gfOption">Gluten Free Option (Y/N) </label>
                  <input className="form__input" type="checkbox" value={glutenFree} onClick = {toggleGF}/>

              </div>
              <div className="vegetarian">
                  <label className="form__label" for="vegOption">Vegetarian Option (Y/N) </label>
                  <input className="form__input" type="checkbox" value={vegetarian} onClick = {toggleVeg}/>
              </div>
              <div className="vegan">
                  <label className="form__label" for="veganOption">Vegan Option (Y/N) </label>
                  <input className="form__input" type="checkbox" value={vegan} onClick = {toggleVegan}/>
              </div>
              <div className="facebook">
                  <label className="form__label" for="cuisine">Facebook URL </label>
                  <input className="form__input" type="text" value={facebook} onChange = {(e) => handleInputChange(e)} id="facebook" placeholder="Facebook URL"/>
              </div>
              <div className="instagram">
                  <label className="form__label" for="cuisine">Instagram URL </label>
                  <input className="form__input" type="text" value={instagram} onChange = {(e) => handleInputChange(e)} id="instagram" placeholder="Instagram URL"/>
              </div>
              <div className="website">
                  <label className="form__label" for="website">Website URL </label>
                  <input className="form__input" type="text" value={website} onChange = {(e) => handleInputChange(e)} id="website" placeholder="Website URL"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
            <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;
