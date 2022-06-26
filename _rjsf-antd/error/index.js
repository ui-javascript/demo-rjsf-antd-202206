import React from 'react';

import jsonSchema from './jsonSchema.json';
import uiSchema from './uiSchema.json';
import formData from './formData.json';
import errorSchema from './errorSchema.json';

import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';

const Form = withTheme(AntDTheme);

import 'antd/dist/antd.css';

export default () => {
  return (
    <div className="p-5">
      <Form
        schema={jsonSchema}
        uiSchema={uiSchema}
        formData={formData}
        extraErrors={errorSchema}
      />
    </div>
  );
};
