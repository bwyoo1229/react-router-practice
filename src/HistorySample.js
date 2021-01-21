import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    // 실수로 무엇인가를 작성하고 있다가 페이지를 나가는 것을 방지
    const unblock = history.block('정말 떠나실건가요?');

    return unblock;
  }, [history]);

  const replaceToHome = () => {
    history.replace('/');
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (replace)</button>
    </div>
  );
}

export default HistorySample;
