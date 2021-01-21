import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';

function Profiles(props) {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/developer"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            developer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
          >
            homer
          </NavLink>
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
