/**
 * Created by 11408 on 2018/7/19.
 */
import React from 'react'
import {observer,useStaticRendering} from 'mobx-react';
import { observe,observable, computed, action } from "mobx";
class Store {
    @observable page =1
    @observable num =2
    @action.bound
    increment(){
        this.page++
    }
    @action.bound
    remove(){
        if(this.page<=0){
            this.page =0
        }else {
            this.page--
        }
    }
}
let store = new Store()
export default store
