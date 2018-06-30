
### <br/>  demo: Button 组件 demo 总览<br/> 
```js
const ButtonDemos = () => {
  return (
    <div style={{ margin: 10 }}>
      <Button>default</Button>
      <WhiteSpace />
      <Button disable={true}>default</Button>
      <WhiteSpace />
      <Button type="primary">primary</Button>
      <WhiteSpace />
      <Button type="primary" disable>
        primary
      </Button>
      <WhiteSpace />
      <Button type="warning">warning</Button>
      <WhiteSpace />
      <Button type="warning" disable>
        warning
      </Button>
      <WhiteSpace />
      <Button loading>Loading</Button>
      <WhiteSpace />
      <Button inline>default</Button>
      <Button type="primary" inline>
        primary
      </Button>
      <Button type="warning" inline>
        warning
      </Button>
      <WhiteSpace />
      <Button size="small">default</Button>
      <Button type="primary" size="small">
        primary
      </Button>
      <Button type="warning" size="small">
        warning
      </Button>
    </div>
  );
};

```

# Button




## API 描述
|名字| 描述|类型|是否需要|默认值|
| ------------- |:-------------:|:-----:| -----:|-----:|
|type||'defalut' or 'primary', 'warning'|false|default|
|disable||propTypes.bool|false|false|
|loading||propTypes.bool|false|false|
|inline||propTypes.bool|false|false|
|size||'large' or 'small'|false|large|
    