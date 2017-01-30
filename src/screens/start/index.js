// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

import {red500, yellow700, grey500, blue500} from 'material-ui/styles/colors';

const styles = {
    lightbulb: {
    },
    switchName: {
        float: 'left',
        position: 'relative'
    },
    block: {
    },
    toggle: {
        marginBottom: 16
    },
    card: {
        backgroundColor: '#fff'
    },
    cardContainer: {
        margin: 10,
        padding: 10
    }
};

class Switch extends Component {
    constructor() {
        super();
        this.state = {
            isOn: false
        };
    }

    onToggle(el, state) {
        this.setState({
            isOn: state
        });
    }

    getLabel(text, state) {
        return (<div>
                <div style={styles.switchName}>
                <FontIcon className="material-icons" color={this.state.isOn ? yellow700 : grey500}>lightbulb_outline</FontIcon>
                </div>
                <div style={styles.switchName}>
                {text}
                </div>
                </div>);
    }

    render() {
        let children = this.props.children;
        return (
                <Toggle defaultToggled={ this.state.isOn } label={this.getLabel(this.props.name, this.state.isOn)}
            onToggle={ this.onToggle.bind(this) } style={styles.toggle} />
        );
    }
}

const LightSwitch = (props) => (
        <Switch name={props.name} />
);

const Room = (props) => (
        <Card style={styles.card}>
        <CardHeader
    title={props.name}
    expanded={true}
    actAsExpander={true}
    showExpandableButton={true}
        />
        <CardText expandable={false}>
        <LightSwitch name="Taklampe" />
        <LightSwitch name="Stålampe" />
        <LightSwitch name="Spot" />
        <LightSwitch name="Le Klint"/>

        </CardText>
        </Card>
);

export default class Start extends Component {
    render() {
        return (
                <div>
                <div style={styles.cardContainer}>
                <Room name="Living room"/>
                </div>
                <div style={styles.cardContainer}>
                <Room name="Kitchen"/>
                </div>
                </div>
        );
    }
}
