import useStyles from './style';
import Alert from '@material-ui/lab/Alert';

export default function CustomAlert() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="error">Pokemon não encontrado!</Alert>
        </div>
    );
}