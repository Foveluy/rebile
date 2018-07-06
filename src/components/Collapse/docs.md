# Collapse

### <br/> demo: 手风琴模式<br/> <br/> demo2: 普通模式<br/>

```js
const Demo1 = () => (
  <Collapse>
    <Panel key={1} header={open => <div>列表1{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={2} header={open => <div>列表2{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={3} header={open => <div>列表3{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
  </Collapse>
);
const Demo2 = () => (
  <Collapse accordion={false}>
    <Panel key={1} header={open => <div>列表1{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={2} header={open => <div>列表2{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={3} header={open => <div>列表3{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
  </Collapse>
);
const CollapseDemo = () => {
  return (
    <div>
      <Demo2 />
      <Demo1 />
    </div>
  );
};
```

## API 描述

| 名字  |            描述             |  类型  | 是否需要 |    默认值 |
| ----- | :-------------------------: | :----: | -------: | --------: |
| style | 最外层的 `div` 组件的 style | object |    false | undefined |
