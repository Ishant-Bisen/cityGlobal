import './App.css';
import AdminServer from './components/AdminDash/AdminServer';
import AuthCode from './components/authentication/AuthCode';
import ForgotPassword from './components/authentication/ForgotPassword';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import AddBeneficeries from './components/beneficiaries/AddBeneficeries';
import BeneficieriesList from './components/beneficiaries/BeneficieriesList';
import LandingPage from './components/landingPage/LandingPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdmLogin from './components/AdminDash/AdmLogin';
import BankStatus from './components/Client/BankStatus';
import AccountSetting from './components/Client/AccountSetting';
import Editaccountdetail from './components/Client/Editaccountdetail';
import Accountdashboard from './components/Client/Accountdashboard';
import UserList from './components/AdminDash/UserList';
import KYCDetails from './components/KYC/KYCDetails';
import KYCUpdate from './components/KYC/KYCUpdate';
import WithdrawDetails from './components/AdminDash/WithdrawDetails';


function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/signin" element={< Login />}/>

                <Route exact path="/register" element={< Register />}/>

                <Route exact path="/forgotpassword" element={< ForgotPassword />}/>

                <Route exact path="/authcode" element={< AuthCode />}/>

                <Route exact path="/benelist" element ={< BeneficieriesList />}/>

                <Route exact path="/admin" element ={< AdminServer />}/>

                <Route exact path="/user" element ={< BankStatus />}/>

                <Route exact path="/adbene" element ={< AddBeneficeries />}/>

                <Route exact path="/accountsetting" element ={< AccountSetting />}/>

                <Route exact path="/" element={< LandingPage />}/>

                <Route exact path="/adminlogin" element ={< AdmLogin />}/>

                <Route exact path="/editaccountdetail" element ={< Editaccountdetail />}/>

                <Route exact path="/userdetail" element ={< Accountdashboard />}/>
                
                <Route exact path="/userlists" element ={< UserList />}/>

                <Route exact path="/KYC" element ={<KYCDetails/>}/>

                <Route exact path="/kycupdate" element ={<KYCUpdate/>}/>

                <Route exact path="/withdrawdetails" element ={<WithdrawDetails/>}/>
                


            </Routes>

        </Router>
    );
}

export default App;