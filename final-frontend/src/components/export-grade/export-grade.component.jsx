import MaterialTable from 'material-table';
import {
  default as React,
  useState,
} from 'react';
import { Form } from 'react-bootstrap';
import StudentSubNav from '../student-sub-nav/student-sub-nav.component';
import { Container } from './export-grade.styles';

class ExportGrade extends React.Component {
  constructor(props) {
    super(props);
  }
  columns = [
    {
      field: 'subject',
      title: 'Subject',
      editable: 'never',
    },
    {
      field: 'semister1',
      editable: 'never',
      title: 'Firest Semister',
    },

    {
      field: 'semister2',
      title: `2nd Semister`,
      editable: 'never',
    },

    {
      field: 'average',
      title: `Average`,
      editable: 'never',
      render: (row) => (
        <div>
          {(row.semister1 + row.semister2) / 2}
        </div>
      ),
    },
  ];

  // const [data, setData] = useState([
  //   {
  //     subject: ' Amharic',
  //     semister1: 81,
  //     semister2: 33,
  //   },

  //   {
  //     subject: ' English',
  //     semister1: 54,
  //     semister2: 89,
  //   },
  //   {
  //     subject: ' Biology',
  //     semister1: 64,
  //     semister2: 84,
  //   },
  //   {
  //     subject: ' Social',
  //     semister1: 63,
  //     semister2: 92,
  //   },
  //   {
  //     subject: ' Physics',
  //     semister1: 53,
  //     semister2: 77,
  //   },
  //   {
  //     subject: ' Chemistry',
  //     semister1: 37,
  //     semister2: 42,
  //   },
  //   {
  //     subject: ' HPE',
  //     semister1: 82,
  //     semister2: 91,
  //   },
  // ]);
  render() {
    console.log('here', this.props.ds);
    return (
      <Container>
        <div className="crid">
          <span>
            Name: {this.props.data.firstName}{' '}
            {this.props.data.middleName}{' '}
            {this.props.data.LastName}
          </span>
          <span>
            id: {this.props.data.schoolId}{' '}
          </span>
          <span>
            Grade: {this.props.data.grade}{' '}
            {this.props.data.section}{' '}
          </span>
        </div>

        <div className="table">
          <MaterialTable
            columns={this.columns}
            data={this.props.data.results}
            title=""
            disableSelectionOnClick
            search={false}
            options={{
              actionsColumnIndex: -1,
              search: false,
              pageSize: 8,
            }}
            style={{ boxShadow: 'none' }}
          />
        </div>
      </Container>
    );
  }
}

export default ExportGrade;
