import React from 'react';
import { UserContext } from '../../context/user.context';
import { Container } from './printable.styles';
class Printable extends React.Component {
  static user = UserContext;
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.user, 'hh');
    console.log(this.props.studentData);
    return (
      <Container
        style={{
          margin: '30px auto',
        }}
      >
        <h1>
          Student Profile Created Sucessfully!{' '}
        </h1>

        <div className="form">
          <div className="box">
            <span>Student Name :</span>
            <span>
              {this.props.student.firstName}
              {this.props.student.middleName}
              {this.props.student.LastName}
            </span>
            <span>Studednt Email : </span>
            <span>
              {' '}
              {this.props.student.email}
            </span>
            <span>Student Phone : </span>
            <span>
              {this.props.student.phone}
            </span>
          </div>
          <div className="box">
            <span>Father Full Name :</span>
            <span>
              {this.props.father.firstName}
              {this.props.father.middleName}
              {this.props.father.LastName}
            </span>
            <span>Father Phone :</span>
            <span>{this.props.father.phone}</span>
            <span>Father Email :</span>
            <span>{this.props.father.email}</span>
          </div>
          <div className="box">
            {' '}
            <span>Mother Full Name :</span>
            <span>
              {this.props.mother.firstName}
              {this.props.mother.middleName}
              {this.props.mother.LastName}
            </span>
            <span>Mother Phone :</span>
            <span>{this.props.mother.phone}</span>
            <span>Mother Email :</span>
            <span>{this.props.mother.email}</span>
          </div>

          <div className="box">
            {' '}
            <span>Grade :</span>
            <span>
              {this.props.studentData &&
                this.props.studentData
                  .currentGrade}
              {this.props.studentData &&
                this.props.studentData.section}
            </span>
          </div>
          <div className="box">
            {' '}
            <span>Id :</span>
            <span>
              {this.props.studentData &&
                this.props.studentData.id}
            </span>
          </div>

          <button
            className="default"
            type="submit"
            style={{ marginLeft: '30px' }}
            onClick={this.props.onRegister}
          >
            Print
          </button>
        </div>
      </Container>
    );
  }
}

export default Printable;
