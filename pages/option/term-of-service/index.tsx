import React, { Component } from "react";
import { render } from "react-dom";
import { Card, Button } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import TitlePage from "~/components/TitlePage";

const TermOfService = () => {
  const onChange = (e) => {
    console.log(e.target.getContent());
  };

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Term of Service Detail" />
      </div>
      <Card>
        <div className="col-12">
          <Editor
            apiKey="la1igo0sfogafdrl7wrj7w9j1mghl7txxke654lgzvkt86im"
            initialValue="Term of Service "
            init={{
              height: 700,
              branding: false,
              plugins: "link image code",
              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | code",
            }}
            onChange={onChange}
          />
        </div>
        <div className="row pt-3">
          <div className="col-12 d-flex justify-content-center">
            <div style={{ paddingRight: 5 }}>
              <Button type="primary" size="large">
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TermOfService;
