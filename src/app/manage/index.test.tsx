import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import Manage from '.';
import React from 'react';

/**
 *「index.tsx」ファイルをテーストするため「index.test.tsx」ファイルを作成(同じディレクトリで作成)。
 * To test 「index.tsx」file, need to create 「index.test.tsx」 file on the same directory.
 */

describe('<Manage />', () => {
  /**
   *****初期状態のテースト*****
   *
   *初期時、以下のようになっていることをチェック。
   *1.画面のタイトル[Sample] が表示されていること。
   *2.ボタン[Add]が非活性となっていること。
   *
   * Eng:
   *****Test for initializing state*****
   *At the state of initail,need to check following state.
   *1.Form Title [Sample] is displayed.
   *2.Button[Add] is not to be enable.
   *
   */
  it('initialized', async () => {
    const dom = render(
      <RecoilRoot>
        <RecoilNexus />
        <BrowserRouter>
          <Manage />
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    //check title
    const element = dom.getByText(/Sample/);
    expect(element).toBeInTheDocument();

    //button
    expect(dom.container.querySelector('#btnAdd')).toBeDisabled();
  });

  /**
   *****Employee Numberを入力した際のテースト*****
   *
   * Employee Numberを入力した際、以下のようになっていることをチェック。
   * 1.画面のタイトル[Sample] が表示されていること。
   * 2.Employee Numberに[00000]を入力したら、ボタン[Add]が活性となること。
   *
   * Eng:
   *****Test for after typing value in the employee number*****
   *
   * After typing value in the employee number ,need to check following state.
   *1.Form Title [Sample] is displayed.
   *2.After typing value [00000] in the employee number,button[Add] has been changed to enable.
   *
   */
  it('add btn is enable after typing employee number', async () => {
    const dom = render(
      <RecoilRoot>
        <RecoilNexus />
        <BrowserRouter>
          <Manage />
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    //check title
    const element = dom.getByText(/Sample/);
    expect(element).toBeInTheDocument();

    //input params
    const empNo = dom.container.querySelector('#empNo');
    await userEvent.type(empNo!, '00000');

    //button
    expect(dom.container.querySelector('#btnAdd')).not.toBeDisabled();
  });

  /**
   *****Employee Nameを入力した際のテースト*****
   *
   * Employee Nameを入力した際、以下のようになっていることをチェック。
   * 1.画面のタイトル[Sample] が表示されていること。
   * 2.Employee Nameに[あいうえ]を入力したら、ボタン[Add]が活性となること。
   *
   * Eng:
   *****Test for after typing value in the employee name*****
   *
   * After typing value in the employee name ,need to check following state.
   *1.Form Title [Sample] is displayed.
   *2.After typing value [あいうえ] in the employee name,button[Add] has been changed to enable.
   *
   */
  it('add btn is enable after typing employee name', async () => {
    const dom = render(
      <RecoilRoot>
        <RecoilNexus />
        <BrowserRouter>
          <Manage />
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    //check title
    const element = dom.getByText(/Sample/);
    expect(element).toBeInTheDocument();

    //input params
    const empName = dom.container.querySelector('#empName');
    await userEvent.type(empName!, 'あいうえ');

    //button
    expect(dom.container.querySelector('#btnAdd')).not.toBeDisabled();
  });

  /**
   *****Contentを入力した際のテースト*****
   *
   * Contentを入力した際、以下のようになっていることをチェック。
   * 1.画面のタイトル[Sample] が表示されていること。
   * 2.Contentに[あいうえ]を入力したら、ボタン[Add]が活性となること。
   *
   * Eng:
   *****Test for after typing value in the content*****
   *
   * After typing value in the content ,need to check following state.
   *1.Form Title [Sample] is displayed.
   *2.After typing value [あいうえ] in the content,button[Add] has been changed to enable.
   *
   */
  it('add btn is enable after typing content', async () => {
    const dom = render(
      <RecoilRoot>
        <RecoilNexus />
        <BrowserRouter>
          <Manage />
        </BrowserRouter>
        ,
      </RecoilRoot>,
    );

    //check title
    const element = dom.getByText(/Sample/);
    expect(element).toBeInTheDocument();

    //input params
    const content = dom.container.querySelector('#content');
    await userEvent.type(content!, 'あいうえ');

    //button
    expect(dom.container.querySelector('#btnAdd')).not.toBeDisabled();
  });
});
