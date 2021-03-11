import React, { useContext, useState }  from 'react';
import ThemeContext from '../../store/context';
import {ListItem, ListItemSecondaryAction, ListItemText, 
      IconButton, Button, Modal, Backdrop, Fade, Popover }from '@material-ui/core';

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '../../assets/icons/edit.png';

const Data = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [editCountry, setEditCountry] = useState(false)
  const [editCity, setEditCity] = useState(false)
  const [editStreet, setEditStreet] = useState(false)
  const [editNumber, setEditNumber] = useState(false)

  const {country, city, street, street_number, 
    setCountry, setCity, setStreet, setStreetNumber } = useContext(ThemeContext)

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleOpen = (e) => {
    if(country !== '' && city !== '' && street_number !== '' && street !== '' ) {
      setModal(true)
    }
    else {
      setAnchorEl(anchorEl ? null : e.currentTarget);
    }
  };

  const handleClose = () => {
    if(country !== '' && city !== '' && street_number !== '' && street !== '' ) {
      setModal(false)
    }
    else {
      setAnchorEl(null);
    }
  };

  return (
    <section style={{width: '500px'}}>
        <ListItem dense button >
          <ListItemText>{country ? country : 'Страна не указана'}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => setEditCountry(!editCountry)}>
              <Img src={EditIcon} />
            </IconButton>
              <Input 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                disabled={!editCountry ? true : false}
                />
          </ListItemSecondaryAction>
        </ListItem>
        
        <ListItem dense button >
          <ListItemText>{city ? city : 'Город не указан'}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => setEditCity(!editCity)}>
              <Img src={EditIcon} />
            </IconButton>
              <Input 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                disabled={!editCity ? true : false}
                />
          </ListItemSecondaryAction>
        </ListItem>  

        <ListItem dense button >
          <ListItemText>{street ? street : 'Улица не указана'}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => setEditStreet(!editStreet)}>
              <Img src={EditIcon} />
            </IconButton>
              <Input 
                value={street} 
                onChange={(e) => setStreet(e.target.value)}
                disabled={!editStreet ? true : false}
                />
          </ListItemSecondaryAction>
        </ListItem>
        
        <ListItem dense button >
          <ListItemText>{street_number ? street_number : 'Номер не указан'}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => setEditNumber(!editNumber)}>
              <Img src={EditIcon} />
            </IconButton>
              <Input 
                value={street_number} 
                onChange={(e) => setStreetNumber(e.target.value)}
                disabled={!editNumber ? true : false}
                />
          </ListItemSecondaryAction>
        </ListItem>  

        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Далее
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          Заполните данные!
        </Popover>

        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={modal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modal}>
            <div className={classes.paper}>
              Success
            </div>
          </Fade>
        </Modal>
    </section>
  )
}

const StyledFlex = styled.label`
  display: flex;
`

const Img = styled.img`
  height: 20px;
  cursor: pointer;
  border: none
`
const Input = styled.input`
  margin: 0 10px;
`

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default Data