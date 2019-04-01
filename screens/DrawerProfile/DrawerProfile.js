

import React, {Component} from 'react'
import {DrawerItems} from 'react-navigation'
import {Container, Content, Header, Body, Image} from 'native-base'
import img from '../../assets/img/myProfile.png'

const CustomDrawer = (props) => (

      <Container>
        <Header>
          <Body>
            <Image source={img}/>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props} /> 
        </Content>
      </Container>
)

export default CustomDrawer