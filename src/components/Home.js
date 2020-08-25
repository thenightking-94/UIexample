import React, { Component } from 'react';
import { Card, Typography, Grid, Button } from '@material-ui/core';
import SideSelection from './SideSelection.js';
import '../css/image_style.css';
import '../css/style1.css';
import '../css/mobile_device.css';

const cross = require('../assets/cross.jpg');
const circle = require('../assets/circle.jpg');
const settings_img = require('../assets/settings_icon.png');
const minus_img = require('../assets/minus_img.jpg');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            tray: false
        };


    }

    componentDidMount() {
        localStorage.clear();
       
    }

    open_settings = () => {
        document.getElementById("screen").style.opacity = "0.4";
        if (this.state.tray == false) {
            document.getElementById("settings_panel").style.display = "block";
            this.setState({ tray: true });
            document.getElementById('spin_off').style.display = "none";
            document.getElementById('spin_on').style.display = "block";

        }

    }

    close_settings = () => {
        document.getElementById("screen").style.opacity = "1";
        if (this.state.tray == true) {
            document.getElementById("settings_panel").style.display = "none";
            this.setState({ tray: false });
            document.getElementById('spin_off').style.display = "block";
            document.getElementById('spin_on').style.display = "none";
        }
    }



    ShowSelection_AI = () => {
        var oppo;
        localStorage.setItem('oppo', 1);
        document.getElementById("Selection_section").style.display = 'block';
        document.getElementById("Selection_section").style.transition = '1.5s';
        document.getElementById("choose").style.display = 'none';

        document.getElementById("settings_icon").style.display="none";
    }
    ShowSelection_friend = () => {
        var oppo;
        localStorage.setItem('oppo', 2);
        document.getElementById("Selection_section").style.display = 'block';
        document.getElementById("Selection_section").style.transition = '1.5s';
        document.getElementById("choose").style.display = 'none';

        document.getElementById("settings_icon").style.display="none";
    }




    render() {
        return (
            <div>
                <div id="screen">

                    <Card class="title1">
                        < Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >

                            <Typography id="sub1"><b>Tic-Tac-Toe</b></Typography>
                        </ Grid>
                    </Card>





                    <div id="choose">

                        <Grid container spacing={24} style={{ borderRadius: "7px", padding: "10px", background: "white", height: "100%", marginTop: '15px' }}>
                            <Grid item sm={6} md={6} xs={12}>
                                < Grid container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <div style={{ display: "flex" }}>
                                        <img src={cross} class="icon_home1" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src={circle} class="icon_home2" />
                                    </div>
                                </ Grid>
                            </Grid>
                            <Grid item sm={6} md={6} xs={12} style={{ marginTop: '3%' }}>
                                < Grid container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >

                                    <Typography style={{ fontFamily: 'Helvetica', fontSize: '15px', color: '#ad1b06',fontWeight:'400' }}>
                                        <b>Select mode</b>
                                    </Typography>
                                    <br /><br />
                                    <Button variant="contained" onClick={this.ShowSelection_AI} class='AI'>AI</Button>
                                    <br />
                                    <br />
                                    <Button variant='contained' onClick={this.ShowSelection_friend} class='Friend'>Friend</Button>

                                </Grid>

                            </Grid>

                        </Grid>



                    </div>



                    <div id="Selection_section" >


                        <SideSelection />


                    </div>







                </div>

                <div id="settings_icon">
                    <img src={settings_img} onClick={this.open_settings} id='spin_off' />
                    <img src={minus_img} onClick={this.close_settings} id='spin_on' />
                </div>


                <div id="settings_panel">
                    <br />
                    <a href='/' style={{ textDecoration: 'none', color: 'white', fontFamily: 'Helvetica', fontSize: '10px' }}> Exit Game </a>
                    <br />
                    <a href='https://gamefaqs.gamespot.com/android/986009-tic-tac-toe' style={{ textDecoration: 'none', color: 'white', fontFamily: 'Helvetica', fontSize: '10px' }}>FAQs </a>

                </div>


            </div>
        );
    }
}

export default (Home);
