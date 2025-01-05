import React from 'react'

export default function About() {


  return (
      <section className="section_all" id="about">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title_all text-center">
                <h2 className="font-weight-bold">Welcome To <span className="text-custom">CloudQuill</span></h2>
                <p className="section_subtitle mx-auto text-muted">CloudQuill is an innovative platform designed to securely store and manage your notes on the cloud.</p>
                <div className="">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="about_header_main mt-3">
                <div className="about_icon_box">
                  <p className="text_custom font-weight-bold">Features of CloudQuill</p>
                </div>
                <h4 className="about_heading text-capitalize font-weight-bold mt-4">Why CloudQuill Stands Out ?</h4>
                <p className="text-muted mt-3">loudQuill sets itself apart with three unique features that make it the superior choice for cloud-based note storage. First, it offers End-to-End Encryption, guaranteeing that only you can access your notes, even the CloudQuill team cannot view them.</p>

                <p className="text-muted mt-3">  Smart Categorization automatically organizes your notes into tags, categories, and priorities, saving you time and boosting efficiency. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="" className="img-fluid mx-auto d-block"/>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Notedown Anywhere</h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">CloudQuill allows you to access your notes anytime, anywhere, across all devices seamlessly and securely. </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fab fa-angellist"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Increases Productivity</h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">As a cloud-based app, CloudQuill ensures your notes are securely stored and accessible from any location. </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Cloud Based </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
              </div>
            </div>
          </div>
      </section>
  )
}
