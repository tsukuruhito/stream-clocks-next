const Note = () => {
  return (
    <div className="contentBox">
      <h2 className="headingSec">Note</h2>
      <ul className="mb-4 p-2">
        <li className="mb-2">
          <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
            <dt>OBSの対話モードに対応しました。</dt>
            <dd className="mr-4">2022/08/01</dd>
          </dl>
        </li>
      </ul>
      <h2 className="headingSec">予告</h2>
      <ul className="mb-4 p-2">
        <li className="mb-2">
          <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
            <dt>BOOTHでも見たことのない？初の時計オーバーレイ リリース</dt>
            <dd className="mr-4">2022/08/??</dd>
          </dl>
        </li>
        <li className="mb-2">
          <dl className="flex flex-row-reverse justify-end pb-2 border-b-[1px] border-primary border-opacity-60">
            <dt>ついに時計以外の素材公開します。</dt>
            <dd className="mr-4">2022/08/??</dd>
          </dl>
        </li>
      </ul>
    </div>
  );
};
export default Note;
