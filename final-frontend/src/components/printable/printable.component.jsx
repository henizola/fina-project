import React from "react";
import { UserContext } from "../../context/user.context";
import CustomizedTables from "../table/table";
import { Container } from "./printable.styles";
class Printable extends React.Component {
  static user = UserContext;
  constructor(props) {
    super(props);
  }
  render() {
    let rows = [];
    return (
      <Container
        style={{
          margin: "30px auto",
        }}
      >
        <div className="form">
          <CustomizedTables
            student={this.props.student}
            father={this.props.father}
            mother={this.props.mother}
            grade={`${
              this.props.studentData && this.props.studentData.currentGrade
            }${this.props.studentData && this.props.studentData.section}`}
            id={`${this.props.studentData && this.props.studentData.id}`}
          />

          <button
            className="default"
            type="submit"
            style={{ marginLeft: "30px" }}
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
