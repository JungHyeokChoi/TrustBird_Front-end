import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Menu from './Menu'
import Footer from './Footer'
import Home from './Home'
import FoundationIntro from './FoundationIntro'
import ServiceIntro from './ServiceIntro'
import TrustWay from './TrustWay'
import TrustSub from './TrustSub'
import Trust from './Trust'
import ContractList from './ContractList'
import ContractEnroll from './ContractEnroll'
import Contract from './Contract'
import MaintenanceFeeList from './MaintenanceFeeList'
import MaintenanceFee from './MaintenanceFee'
import SignModified from './SignModified'
import Withdrawal from './Withdrawal'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Main = () => {
    return (
        <Router>
            <Route component={Menu} />
            <Route component={Footer} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/foundationintro">
                    <FoundationIntro />
                </Route>
                <Route path="/serviceintro">
                    <ServiceIntro />
                </Route>
                <Route path="/trustway">
                    <TrustWay />
                </Route>
                <Route path="/trustsub">
                    <TrustSub />
                </Route>
                <Route path="/trust">
                    <Trust />
                </Route>
                <Route path="/contractlist">
                    <ContractList />
                </Route>
                <Route path="/contractenroll">
                    <ContractEnroll />
                </Route>
                <Route path="/contract">
                    <Contract />
                </Route>
                <Route path="/maintenancefeelist">
                    <MaintenanceFeeList />
                </Route>
                <Route path="/MaintenanceFee">
                    <MaintenanceFee />
                </Route>
                <Route path="/signmodified">
                    <SignModified />
                </Route>
                <Route path="/withdrawal">
                    <Withdrawal />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/signout">
                    <SignOut />
                </Route>
            </Switch> 
        </Router>
    )
}

export default Main
