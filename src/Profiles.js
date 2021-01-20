import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

function Profiles(props) {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/developer">developer</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>

      {/* 렌더는 바로 간단하고 빠르게 만들때 사용하기 좋다.*/}
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
