import { describe, it, expect, assert } from "vitest";
import { DOMWrapper, mount } from '@vue/test-utils';
import { ref } from 'vue';
import ListAndDetail from '../../listAndDetail/index.vue';

let defaultValue = [
  {
    title: 'title1',
    detail: 'detail1',
  },
  {
    title: 'title',
    detail: 'detail2'
  },
  {
    title: 'title',
    detail: 'detail3'
  },
  {
    title: 123,
    detail: 'detail'
  },
  {
    title: {},
    detail: 'detail'
  },
  {
    title: null,
    detail: 'detail'
  },
  {
    title: undefined,
    detail: 'detail'
  },
  {
    title: '1',
    detail: '1'
  },
  {
    title: 'some',
    detail: 'some'
  },
]

const _mount = (props) => {
  return mount(ListAndDetail, {
    props: {
      data: defaultValue
    }
  })
}


describe('listAndDetail', () => {

  it.concurrent('wrap class', () => {
    const wrapper = _mount();
    expect(wrapper.classes()).toContain('wrap');
  })

  it.concurrent('default props', () => {
    const wrapper = _mount();
    expect(wrapper.props()).toEqual({ data: defaultValue });
  })

  it.concurrent('button class', async () => {
    const wrapper = _mount();
    expect(wrapper.find('button').attributes('class')).toEqual('hidden-btn');
  });

})