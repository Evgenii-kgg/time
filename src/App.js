import React, { useState } from "react";
import "./App.css";

import moment from 'moment';

function DateTimePretty(Component) {
  console.log(Component);
  
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: props.data,
      };
    }

    componentDidMount() {
      this.setState((prevState) => {

        let timeChange = "Недавно"

        if (moment().isAfter(prevState.date) < moment().subtract(1, 'hour')) {
          timeChange = "12 минут назад"
        } if(moment().isAfter(prevState.date) > moment().subtract(1, 'hour')) {
          timeChange = "5 часов назад"
        } if(moment().isAfter(prevState.date) > moment().subtract(1, 'day')) {
          timeChange = "X дней назад"
        }
        return {
          date: timeChange
        };
      });
    }

    render() {
      console.log(this.props , Component);
      
      return <Component date={this.state.date} />;
    }
  };
}

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function Video(props) {
  const comp = DateTimePretty(<DateTime date={props.date} />)
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      {comp}
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url:
        "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
    },
    {
      url:
        "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
    },
    {
      url:
        "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
    },
    {
      url:
        "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url:
        "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url:
        "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />
}
