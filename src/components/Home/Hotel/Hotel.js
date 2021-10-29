import React from 'react';

const Hotel = () => {
    return (
        <div style={{display: 'flex',border: '1px solid gray'}}>
             <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVR6_cfnefBRR3W4kD1fobBChQiGYbDAE7xwbOQmsTDLzEmOah0ry6-PU2DnERsfsXV2g&usqp=CAU" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div >
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
        </div>
    );
};

export default Hotel;