import React from 'react';
import Form from '@rjsf/antd';
import jsonSchema from './index.jsonSchema.json';
import uiSchema from './index.uiSchema.json';
import formData from './index.formData.json';

export default () => {
  return (
    <div>
      <Form jsonSchema={jsonSchema} uiSchema={uiSchema} formData={formData} />
    </div>
  );
};
