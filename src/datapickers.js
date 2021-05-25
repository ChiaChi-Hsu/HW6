import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: 200
  },
}));

function ROCDATE(date) {
  var year=date.slice(0,4)-1911;
  var month=date.slice(5,7);
  var day=date.slice(8,10); 
  return `民國${year}年-${month}月-${day}號`; //顯示出的
}

export default function DatePickers() {

  const classes = useStyles();
  const [ROCdate, setROCdate] = useState("民國   年-  月-  號")
  //變數型態 [變數名稱, 函式名稱] = useState(變數初始值)

  return (
    <form className={classes.container} noValidate>
      <TextField
        className={classes.textField}
        id="basic"
        label="🔔 阿公店開店日選擇 🔔"
        value={ROCdate}
      />
      <TextField
        className={classes.textField}
        id="date"
        label="🍜 阿公開的是拉麵店啦 🍜"
        type="date"
        onChange={event => { //拿值
            setROCdate(ROCDATE(event.target.value)) //會拿到date
            //(改變完的值)
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}