# Dropdown

<br/> 下拉菜单<br/>

### <br/> demo: 最简单的 dropdown<br/>

```js
const Demo = () => {
  return (
    <div>
      <Toggle>
        {(toggle, set) => (
          <React.Fragment>
            <Button onClick={set} size="small">
              {toggle ? 'Show' : 'Close'}
            </Button>
            <Dropdown style={{backgroundColor: '#999'}} open={toggle} />
          </React.Fragment>
        )}
      </Toggle>
    </div>
  );
};
const Wrapper = () => {
  return <Demo />;
};
```

## API 描述

| 名字 | 描述 | 类型 | 是否需要 | 默认值 |
| ---- | :--: | :--: | -------: | -----: |

