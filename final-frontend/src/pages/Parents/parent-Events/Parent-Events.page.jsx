import MaterialTable, {
  MTableEditField,
} from 'material-table';
import {
  default as React,
  useState,
} from 'react';
import ParentSubNav from '../../../components/parent-sub-nav/parent-sub-nav.component';

import { Container } from './Parent-Events.styles';

const ParentEvents = () => {
  const [filterd, setFilterd] = useState([]);
  var today = new Date();
  var dd = String(today.getDate()).padStart(
    2,
    '0'
  );
  var mm = String(today.getMonth() + 1).padStart(
    2,
    '0'
  ); //January is 0!
  var yyyy = String(today.getFullYear()).slice(
    2,
    4
  );

  const columns = [
    {
      field: 'name',
      title: 'Full  Name',
      editable: 'never',
    },
    {
      field: 'daysAbsent',
      editable: 'never',
      title: 'Days Absent',
    },

    {
      field: 'today',
      title: ` ${mm} / ${dd - 4} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd - 3} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd - 2} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd - 1} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd} / ${yyyy}`,
      editable:
        today !== today ? 'never' : 'always',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
  ]);
  return (
    <Container>
      <ParentSubNav />
      <h1>Upcoming Events</h1>
      <div className="cards">
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Title :</span>
          <span>Educational trip to Tecno</span>
          <span>Description :</span>
          <span>
            Some description Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Officia eius itaque laborum vero non
            iure, asperiores magni saepe
            distinctio enim voluptatem velit rerum
            soluta, ea amet ipsum doloribus
            obcaecati consequuntur!
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
      </div>
    </Container>
  );
};

export default ParentEvents;