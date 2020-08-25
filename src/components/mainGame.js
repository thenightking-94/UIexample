import React, { Component } from 'react';
import { Card, Typography, Grid, Button, Table, TableBody, TableCell, TableRow } from '@material-ui/core';

import '../css/image_style.css';
import '../css/style1.css';
import '../css/style2.css';

const cross = require('../assets/cross.jpg');
const circle = require('../assets/circle.jpg');
const white_cell = require('../assets/white_cell.jpeg');

class mainGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p1: '0',
            p2: '0',
            p3: '0',
            p4: '0',
            p5: '0',
            p6: '0',
            p7: '0',
            p8: '0',
            p9: '0'


        };
    }

    cell1 = (e) => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white1").style.display = "none";
            document.getElementById("cell_img_cross1").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p1: 3 });
            if (((this.state.p2 + this.state.p3) == 6) || ((this.state.p4 + this.state.p7) == 6) || ((this.state.p3 + this.state.p6 + this.state.p9) == 9)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 9) || ((this.state.p2 + this.state.p5 + this.state.p8) == 9) || ((this.state.p5 + this.state.p9) == 6)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                var points;
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";



            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white1").style.display = "none";
            document.getElementById("cell_img_circle1").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p1: 7 });
            if (((this.state.p2 + this.state.p3) == 14) || ((this.state.p4 + this.state.p7) == 14) || ((this.state.p3 + this.state.p6 + this.state.p9) == 21)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 21) || ((this.state.p2 + this.state.p5 + this.state.p8) == 21) || ((this.state.p5 + this.state.p9) == 14)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell2 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white2").style.display = "none";
            document.getElementById("cell_img_cross2").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p2: 3 });
            if (((this.state.p1 + this.state.p3) == 6) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9) || ((this.state.p3 + this.state.p6 + this.state.p9) == 9)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 9) || ((this.state.p5 + this.state.p8) == 6) || ((this.state.p1 + this.state.p5 + this.state.p9) == 9)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                var points;
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white2").style.display = "none";
            document.getElementById("cell_img_circle2").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p2: 7 });
            if (((this.state.p1 + this.state.p3) == 14) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21) || ((this.state.p3 + this.state.p6 + this.state.p9) == 21)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 21) || ((this.state.p5 + this.state.p8) == 14) || ((this.state.p1 + this.state.p5 + this.state.p9) == 21)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell3 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white3").style.display = "none";
            document.getElementById("cell_img_cross3").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p3: 3 });
            if (((this.state.p1 + this.state.p2) == 6) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9) || ((this.state.p6 + this.state.p9) == 6)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 9) || ((this.state.p2 + this.state.p5 + this.state.p8) == 9) || ((this.state.p1 + this.state.p5 + this.state.p9) == 9)
                || ((this.state.p5 + this.state.p7) == 6) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white3").style.display = "none";
            document.getElementById("cell_img_circle3").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p3: 7 });
            if (((this.state.p1 + this.state.p2) == 14) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21) || ((this.state.p6 + this.state.p9) == 14)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 21) || ((this.state.p2 + this.state.p5 + this.state.p8) == 21) || ((this.state.p1 + this.state.p5 + this.state.p9) == 21)
                || ((this.state.p5 + this.state.p7) == 14) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell4 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white4").style.display = "none";
            document.getElementById("cell_img_cross4").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p4: 3 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 9) || ((this.state.p1 + this.state.p7) == 6) || ((this.state.p5 + this.state.p6) == 6) || ((this.state.p3 + this.state.p6 + this.state.p9) == 9)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 9) || ((this.state.p2 + this.state.p5 + this.state.p8) == 9) || ((this.state.p1 + this.state.p5 + this.state.p9) == 9)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 9) || ((this.state.p1 + this.state.p7) == 6)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white4").style.display = "none";
            document.getElementById("cell_img_circle4").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p4: 7 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 21) || ((this.state.p1 + this.state.p7) == 14) || ((this.state.p5 + this.state.p6) == 14) || ((this.state.p3 + this.state.p6 + this.state.p9) == 21)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 21) || ((this.state.p2 + this.state.p5 + this.state.p8) == 21) || ((this.state.p1 + this.state.p5 + this.state.p9) == 21)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 14)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell5 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white5").style.display = "none";
            document.getElementById("cell_img_cross5").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p5: 3 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9) || ((this.state.p3 + this.state.p6 + this.state.p9) == 9)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 9) || ((this.state.p2 + this.state.p8) == 6) || ((this.state.p1 + this.state.p9) == 6)
                || ((this.state.p3 + this.state.p7) == 6) || ((this.state.p4 + this.state.p6) == 6) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white5").style.display = "none";
            document.getElementById("cell_img_circle5").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p5: 7 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21) || ((this.state.p3 + this.state.p6 + this.state.p9) == 21)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 21) || ((this.state.p2 + this.state.p8) == 14) || ((this.state.p1 + this.state.p9) == 14)
                || ((this.state.p3 + this.state.p7) == 14) || ((this.state.p4 + this.state.p6) == 14) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell6 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white6").style.display = "none";
            document.getElementById("cell_img_cross6").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p6: 3 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9) || ((this.state.p3 + this.state.p9) == 6)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 9) || ((this.state.p2 + this.state.p5 + this.state.p8) == 9) || ((this.state.p1 + this.state.p5 + this.state.p9) == 9)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 9) || ((this.state.p4 + this.state.p5) == 6) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white6").style.display = "none";
            document.getElementById("cell_img_circle6").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p6: 7 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21) || ((this.state.p3 + this.state.p9) == 14)
                || ((this.state.p7 + this.state.p8 + this.state.p9) == 21) || ((this.state.p2 + this.state.p5 + this.state.p8) == 21) || ((this.state.p1 + this.state.p5 + this.state.p9) == 21)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 21) || ((this.state.p4 + this.state.p5) == 14) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";
            }
        }




    }
    cell7 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white7").style.display = "none";
            document.getElementById("cell_img_cross7").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p7: 3 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 9) || ((this.state.p1 + this.state.p4) == 6) || ((this.state.p3 + this.state.p6 + this.state.p9) == 9)
                || ((this.state.p8 + this.state.p9) == 6) || ((this.state.p2 + this.state.p5 + this.state.p8) == 9) || ((this.state.p1 + this.state.p5 + this.state.p9) == 9)
                || ((this.state.p3 + this.state.p5) == 6) || ((this.state.p1 + this.state.p4) == 6)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white7").style.display = "none";
            document.getElementById("cell_img_circle7").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p7: 7 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 21) || ((this.state.p1 + this.state.p4) == 14) || ((this.state.p3 + this.state.p6 + this.state.p9) == 21)
                || ((this.state.p8 + this.state.p9) == 14) || ((this.state.p2 + this.state.p5 + this.state.p8) == 21) || ((this.state.p1 + this.state.p5 + this.state.p9) == 21)
                || ((this.state.p3 + this.state.p5) == 14) || ((this.state.p1 + this.state.p4) == 14)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell8 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white8").style.display = "none";
            document.getElementById("cell_img_cross8").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p8: 3 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9) || ((this.state.p3 + this.state.p6 + this.state.p9) == 9)
                || ((this.state.p7 + this.state.p9) == 6) || ((this.state.p2 + this.state.p5) == 6) || ((this.state.p1 + this.state.p5 + this.state.p9) == 9)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white8").style.display = "none";
            document.getElementById("cell_img_circle8").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p8: 7 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21) || ((this.state.p3 + this.state.p6 + this.state.p9) == 21)
                || ((this.state.p7 + this.state.p9) == 14) || ((this.state.p2 + this.state.p5) == 14) || ((this.state.p1 + this.state.p5 + this.state.p9) == 21)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")
                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }
    cell9 = () => {
        const player = window.localStorage.getItem('c1');
        if (player == '1') {
            document.getElementById("cell_img_white9").style.display = "none";
            document.getElementById("cell_img_cross9").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 2);
            this.setState({ p9: 3 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9) || ((this.state.p3 + this.state.p6) == 6)
                || ((this.state.p7 + this.state.p8) == 6) || ((this.state.p2 + this.state.p5 + this.state.p8) == 9) || ((this.state.p1 + this.state.p5) == 6)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 9) || ((this.state.p1 + this.state.p4 + this.state.p7) == 9)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player1");
                var points;
                var win;
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "Opponent")
                localStorage.setItem('points', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }
        if (player == '2') {
            document.getElementById("cell_img_white9").style.display = "none";
            document.getElementById("cell_img_circle9").style.display = "block";
            localStorage.removeItem('c1');
            localStorage.setItem('c1', 1);
            this.setState({ p9: 7 });
            if (((this.state.p1 + this.state.p2 + this.state.p3) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21) || ((this.state.p3 + this.state.p6) == 14)
                || ((this.state.p7 + this.state.p8) == 14) || ((this.state.p2 + this.state.p5 + this.state.p8) == 21) || ((this.state.p1 + this.state.p5) == 14)
                || ((this.state.p3 + this.state.p5 + this.state.p7) == 21) || ((this.state.p1 + this.state.p4 + this.state.p7) == 21)) {
                document.getElementById('TtT').style.pointerEvents = "none";
                var winner;
                localStorage.setItem('winner', "Player2");
                var win;
                if (localStorage.getItem('c2') == '2')
                    localStorage.setItem('win', "You")
                if (localStorage.getItem('c2') == '1')
                    localStorage.setItem('win', "Opponent")

                var oppoints;
                localStorage.setItem('oppoints', 1);
                document.getElementById('msgscrn').style.top = "300px";
                document.getElementById('TtT').style.opacity = "0.4";

            }
        }




    }


    ScrCal = () => {



        if (localStorage.getItem('winner') == "Player1") {

            if (localStorage.getItem('prevX') != null) {
                var countX;
                var scoreX_number = parseInt(localStorage.getItem('points'));
                var prevX_number = parseInt(localStorage.getItem('prevX'));
                countX = scoreX_number + prevX_number;
                localStorage.setItem('count1', countX);
            }
            else {
                localStorage.setItem('count1', localStorage.getItem('points'));
                localStorage.setItem('count2', 0);
            }
        }
        if (localStorage.getItem('winner') == "Player2") {

            if (localStorage.getItem('prevO') != null) {
                var countO;
                var scoreO_number = parseInt(localStorage.getItem('oppoints'));
                var prevO_number = parseInt(localStorage.getItem('prevO'));
                countO = scoreO_number + prevO_number;
                localStorage.setItem('count2', countO);
            }
            else {
                localStorage.setItem('count2', localStorage.getItem('oppoints'));
                localStorage.setItem('count1', 0);
            }

        }
        document.getElementById('msgscrn').style.top = "300px";
        document.getElementById('TtT').style.opacity = '1';



    }

    resetBoard = () => {
        document.getElementById('TtT').style.pointerEvents = "auto";
        this.setState({ p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, p8: 0, p9: 0 });
        document.getElementById('msgscrn').style.top = "-180px";
        var choice;
        choice = localStorage.getItem('c2');
        localStorage.setItem('c1', choice);

        document.getElementById("cell_img_white1").style.display = "block";
        document.getElementById("cell_img_white2").style.display = "block";
        document.getElementById("cell_img_white3").style.display = "block";
        document.getElementById("cell_img_white4").style.display = "block";
        document.getElementById("cell_img_white5").style.display = "block";
        document.getElementById("cell_img_white6").style.display = "block";
        document.getElementById("cell_img_white7").style.display = "block";
        document.getElementById("cell_img_white8").style.display = "block";
        document.getElementById("cell_img_white9").style.display = "block";


        document.getElementById("cell_img_circle9").style.display = "none";
        document.getElementById("cell_img_circle8").style.display = "none";
        document.getElementById("cell_img_circle7").style.display = "none";
        document.getElementById("cell_img_circle6").style.display = "none";
        document.getElementById("cell_img_circle5").style.display = "none";
        document.getElementById("cell_img_circle4").style.display = "none";
        document.getElementById("cell_img_circle3").style.display = "none";
        document.getElementById("cell_img_circle2").style.display = "none";
        document.getElementById("cell_img_circle1").style.display = "none";


        document.getElementById("cell_img_cross9").style.display = "none";
        document.getElementById("cell_img_cross8").style.display = "none";
        document.getElementById("cell_img_cross7").style.display = "none";
        document.getElementById("cell_img_cross6").style.display = "none";
        document.getElementById("cell_img_cross5").style.display = "none";
        document.getElementById("cell_img_cross4").style.display = "none";
        document.getElementById("cell_img_cross3").style.display = "none";
        document.getElementById("cell_img_cross2").style.display = "none";
        document.getElementById("cell_img_cross1").style.display = "none";


        var prevX, prevO;
        localStorage.setItem('prevX', localStorage.getItem('count1'));
        localStorage.setItem('prevO', localStorage.getItem('count2'));
    }



    render() {

        //var { scoreX, scoreO } = this.state;

        return (
            <div>
                <div id="screen">

                    <div id="msgscrn">
                        <Typography style={{ textAlign: 'center', fontFamily: 'Helvetica', fontSize: '13px', background: '#ad1b02', color: 'black', padding: '3px', borderRadius: '10px' }}>
                            {localStorage.getItem('win')} won !!
                        </Typography>
                        <br />

                        <Typography style={{ textAlign: 'center', cursor: "pointer", fontFamily: 'Helvetica', fontSize: '13px', background: '#e88d14', color: 'white', padding: '3px', borderRadius: '10px' }} onClick={this.ScrCal} >
                            Click to tally/calculate points !!</Typography>
                        <br />

                        <Typography style={{ textAlign: 'center', cursor: "pointer", fontFamily: 'Helvetica', fontSize: '13px', background: '#e88d14', color: 'white', padding: '3px', borderRadius: '10px' }} onClick={this.resetBoard} >
                            Click to publish scores and reset board !!</Typography>
                    </div>

                    <div id="main_game_section">

                        <Grid container spacing={24} id='game_frame'>
                            <Grid item sm={3} md={3} xs={12} id='score_board'>
                                <Typography style={{ boxShadow: "5px 10px 8px #888888", textAlign: 'center', fontFamily: 'Helvetica', fontSize: '15px', backgroundImage: "linear-gradient(to left,#e88d14,#ad1b06)", color: 'white', padding: '3px', borderRadius: '10px' }}>
                                    <b>Scores</b>
                                </Typography>
                                <br /><br />
                                <div style={{ display: 'flex', textAlign: 'center' }} class="score_text">
                                    <Typography style={{ fontFamily: 'Helvetica', fontSize: '13px', color: 'black' }}>
                                        Player 1
                                </Typography>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Card style={{ boxShadow: "5px 10px 8px #888888", fontFamily: 'Helvetica', fontSize: '15px', color: 'black', padding: '4px', borderRadius: '10px', background: '#dcdcdc' }}>
                                        <b>  {localStorage.getItem('count1') ? localStorage.getItem('count1') : 0}  :  {localStorage.getItem('count2') ? localStorage.getItem('count2') : 0} </b>
                                    </Card>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Typography style={{ fontFamily: 'Helvetica', fontSize: '13px', color: 'black' }}>
                                        Player 2
                                </Typography>


                                </div>
                            </Grid>
                            <Grid item sm={7} md={7} xs={12} id="TtT" >

                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="right"
                                >
                                    <Grid container spacing={24} >
                                        <Grid item class='simulate' style={{ borderRight: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img onClick={this.cell1} src={white_cell} id="cell_img_white1" />
                                            <img src={cross} id="cell_img_cross1" />
                                            <img src={circle} id="cell_img_circle1" />
                                        </Grid>
                                        <Grid item class='simulate' sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell2} id="cell_img_white2" />
                                            <img src={cross} id="cell_img_cross2" />
                                            <img src={circle} id="cell_img_circle2" />
                                        </Grid>
                                        <Grid item class='simulate' style={{ borderLeft: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell3} id="cell_img_white3" />
                                            <img src={cross} id="cell_img_cross3" />
                                            <img src={circle} id="cell_img_circle3" />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={24} >
                                        <Grid item class='simulate' style={{ borderTop: '2px solid #1677C5', borderRight: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell4} id="cell_img_white4" />
                                            <img src={cross} id="cell_img_cross4" />
                                            <img src={circle} id="cell_img_circle4" />
                                        </Grid>
                                        <Grid item class='simulate' style={{ borderTop: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell5} id="cell_img_white5" />
                                            <img src={cross} id="cell_img_cross5" />
                                            <img src={circle} id="cell_img_circle5" />
                                        </Grid>
                                        <Grid item class='simulate' style={{ borderTop: '2px solid #1677C5', borderLeft: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell6} id="cell_img_white6" />
                                            <img src={cross} id="cell_img_cross6" />
                                            <img src={circle} id="cell_img_circle6" />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={24} >
                                        <Grid item class='simulate' style={{ borderRight: '2px solid #1677C5', borderTop: '2px solid #1677C5', borderRight: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell7} id="cell_img_white7" />
                                            <img src={cross} id="cell_img_cross7" />
                                            <img src={circle} id="cell_img_circle7" />
                                        </Grid>
                                        <Grid item class='simulate' style={{ borderTop: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell8} id="cell_img_white8" />
                                            <img src={cross} id="cell_img_cross8" />
                                            <img src={circle} id="cell_img_circle8" />
                                        </Grid>
                                        <Grid item class='simulate' style={{ borderLeft: '2px solid #1677C5', borderTop: '2px solid #1677C5' }} sm={4} xs={4}>
                                            <img src={white_cell} onClick={this.cell9} id="cell_img_white9" />
                                            <img src={cross} id="cell_img_cross9" />
                                            <img src={circle} id="cell_img_circle9" />
                                        </Grid>
                                    </Grid>

                                </Grid>






                            </Grid>


                        </Grid>





                    </div>







                </div>


            </div>
        );
    }
}

export default (mainGame);
