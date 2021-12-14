import React, { useEffect, useState } from "react";
import { Text, Dropdown, Input } from "@components/ui";

const templates = [
  {
    name: "company_update",
    components: [
      {
        type: "HEADER",
        format: "TEXT",
        text: "Welcome from RUM {{1}} Work",
      },
      {
        type: "BODY",
        text:
          "Hello {{1}} {{2}} , 多謝您對RUM Work 有興趣，我地提供*7天免費試用*，試用包括連接不同即時通訊軟件，提供多人登入模式及獨創 Drip Campaign 自動化銷售訊息 及 Ticketing 功能，解決漏覆客人查詢的問題，詳細可以去我們網站睇睇呀 ! 😁",
      },
      {
        type: "BUTTONS",
        buttons: [
          {
            type: "URL",
            text: "免費試用",
            url: "https://www.rumwork.io/",
          },
        ],
      },
    ],
    language: "zh_HK",
    status: "APPROVED",
    category: "ALERT_UPDATE",
    id: "479261303276251",
  },
  {
    name: "sample_flight_confirmation_1",
    components: [
      {
        type: "HEADER",
        format: "VIDEO",
      },
      {
        type: "BODY",
        text:
          "Ini merupakan konfirmasi penerbangan Anda untuk {{1}}-{{2}} di {{3}}.",
      },
      {
        type: "FOOTER",
        text: "Pesan ini berasal dari bisnis yang tidak terverifikasi.",
      },
    ],
    language: "id",
    status: "APPROVED",
    category: "TICKET_UPDATE",
    id: "399148435188862",
  },
  {
    name: "sample_flight_confirmation",
    components: [
      {
        type: "HEADER",
        format: "DOCUMENT",
      },
      {
        type: "BODY",
        text: "Confirmamos tu vuelo a {{1}}-{{2}} para el {{3}}.",
      },
      {
        type: "FOOTER",
        text: "Este mensaje proviene de un negocio no verificado.",
      },
    ],
    language: "es",
    status: "APPROVED",
    category: "TICKET_UPDATE",
    id: "1053023378573116",
  },
];

function placeholderInputs(text, id) {
  let fields = [];
  fields.push(
    <Input
      type="text"
      defaultValue={text}
      id={id}
      name={id}
      required
      readOnly
      className="pointer-events-none"
    />
  );
  for (let i = 1; i < text.length; i++) {
    if (text.includes(`{{${i}}}`)) {
      fields.push(
        <div className="w-full inline-flex my-2">
          Placeholder {i}
          <Input
            className="w-full mx-4"
            type="text"
            name={`id-${i}`}
            id={`id-${i}`}
          />
        </div>
      );
    } else {
      break;
    }
  }
  return fields;
}

function Rampwin() {
  useEffect(() => {
    document.getElementsByTagName("body")[0].dataset.theme = "dark";
    return () => {
      document.getElementsByTagName("body")[0].dataset.theme = "light";
    };
  }, []);

  let [selectedTemplate, setSelectedTemplate] = useState(null);

  let headerInputFields = [];
  let bodyInputFields = [];
  let footerInputFields = [];
  if (selectedTemplate) {
    let currentTemplate = templates.find(
      (temp) => temp.name == selectedTemplate
    );

    let headerComponent = currentTemplate.components.find(
      (comp) => comp.type == "HEADER"
    );

    if (headerComponent)
      switch (headerComponent.format) {
        case "TEXT":
          headerInputFields.push(
            ...placeholderInputs(headerComponent.text, "header-text")
          );
          break;
        case "IMAGE":
          headerInputFields.push(
            <Input
              type="file"
              id="headerImage"
              name="headerImage"
              accept="image/*"
              required
            />
          );
          break;
        case "VIDEO":
          headerInputFields.push(
            <Input
              type="file"
              id="headerVideo"
              name="headerVideo"
              accept="video/*"
              required
            />
          );
          break;
        case "DOCUMENT":
          headerInputFields.push(
            <Input
              type="file"
              name="headerDocument"
              id="headerDocument"
              accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              required
            />
          );
          break;
      }

    let bodyComponent = currentTemplate.components.find(
      (comp) => comp.type == "BODY"
    );

    if (bodyInputFields)
      bodyInputFields.push(
        ...placeholderInputs(bodyComponent.text, "body-text")
      );

    let footerComponent = currentTemplate.components.find(
      (comp) => comp.type == "FOOTER"
    );

    if (footerComponent)
      footerInputFields.push(
        ...placeholderInputs(footerComponent.text, "body-text")
      );
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Dropdown
        label="Select  the template"
        items={templates.map((temp) => temp.name)}
        onChange={setSelectedTemplate}
      />
      {selectedTemplate && <Text> {selectedTemplate} </Text>}
      {selectedTemplate && (
        <form onSubmit={submitHandler} className="max-w-2xl">
          {headerInputFields.length > 0 && (
            <div className="flex flex-col p-4">
              <Text variant="sectionHeading"> Template Header </Text>
              {headerInputFields}
            </div>
          )}
          {bodyInputFields.length > 0 && (
            <div className="flex flex-col p-4">
              <Text variant="sectionHeading"> Template Body </Text>
              {bodyInputFields}
            </div>
          )}
          {footerInputFields.length > 0 && (
            <div className="flex flex-col p-4">
              <Text variant="sectionHeading"> Template Footer </Text>
              {footerInputFields}
            </div>
          )}
          <Input type="submit" className="cursor-pointer" />
        </form>
      )}
    </div>
  );
}

export default Rampwin;
