import React, { Component } from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";

class PaginationPage extends Component {


  render() {
    const pages = this.props.numberOfPages; 
    const paginationAction = this.props.paginationAction;
    
    const pagesArray = [];
    for (let i = 1; i <= pages; i++) {
      pagesArray.push(i);
    } 

    const activePage = this.props.activePage;
    return (
      <div className="pagination">
      
      <MDBRow>
        <MDBCol>
          <MDBPagination className="mb-5">
            <MDBPageItem>
              <MDBPageNav aria-label="Previous" href="#" onClick={() => this.props.prevPage()}>
                <span aria-hidden="true">Previous </span>
              </MDBPageNav>
            </MDBPageItem>

            {pagesArray.map((page) => (
              <MDBPageItem active={activePage === page} key={page}>
                <MDBPageNav href="#" onClick={() => paginationAction(page)}>{page}</MDBPageNav>
              </MDBPageItem>
            ))}

            <MDBPageItem>
              <MDBPageNav aria-label="Previous"  href="#" onClick={() => this.props.nextPage()}>
                <span aria-hidden="true">Next</span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
   
            </div>
    );
  }
}

export default PaginationPage;
