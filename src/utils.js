import moment from 'moment';


export const  prettifyDate = (date) => {

    let prettyDate = "Недавно"
    
    if (moment().isAfter(date) < moment().subtract(1, 'hour')) {
      prettyDate = "12 минут назад"
    } if(moment().isAfter(date) > moment().subtract(1, 'hour')) {
      prettyDate = "5 часов назад"
    } if(moment().isAfter(date) > moment().subtract(1, 'day')) {
      prettyDate = "X дней назад"
    }
    return  prettyDate
    
  }