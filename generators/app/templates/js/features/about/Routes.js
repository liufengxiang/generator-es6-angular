/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import tpl from './partials/about.html';

export default [
    {
        id: 'about',
        isDefault: false,
        when: '/about',
        controller: 'AboutController',
        template: tpl
    }
];
