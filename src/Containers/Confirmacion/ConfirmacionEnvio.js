import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../../Assets/Slide3.jpg';
import classes from './ConfirmacionEnvio.module.css';

const ConfirmacionEnvio = (props) => {
    return (
        <Card style={{ width: '800px', margin: 'auto', marginTop: '2rem', textAlign: 'center' }} className={classes.animation}>
            <CardActionArea>
                <CardMedia
                    style={{height:'240px'}}
                    image={img}
                    title="DataViz Solutions"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        ¡Muchas gracias por completar con éxito nuestro formulario de captura de información!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Estaremos comunicandonos con ustedes lo antes posible.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ConfirmacionEnvio;