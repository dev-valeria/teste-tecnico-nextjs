import React, { useState } from 'react';
import { DataGrid } from 'devextreme-react/data-grid';
import { TreeList } from 'devextreme-react/tree-list';

const ToggleView = ({ data }) => {
  const [view, setView] = useState('DataGrid');

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => setView(view === 'DataGrid' ? 'TreeList' : 'DataGrid')}
      >
        Toggle View
      </button>
      {view === 'DataGrid' ? (
        <DataGrid dataSource={data} keyExpr="id" />
      ) : (
        <TreeList dataSource={data} keyExpr="id" />
      )}
    </div>
  );
};

export default ToggleView;
