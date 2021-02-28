import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'page1',
        name: 'page1',
        meta: {
          title: '页面 1',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          title: '页面 2',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'page3',
        name: 'page3',
        meta: {
          title: '页面 3',
          auth: true
        },
        component: _import('demo/page3')
      },
      {
        path: 'stuData',
        name: 'stuData',
        component: _import('stuManger/stuData'),
        meta: {
          auth: true,
          title: '学生信息管理'
        }
      },
      {
        path: 'erroData',
        name: 'erroData',
        component: _import('stuManger/erroData'),
        meta: {
          auth: true,
          title: '学生异常信息'
        }
      },
      {
        path: 'admin',
        name: 'admin',
        component: _import('account/admin'),
        meta: {
          auth: true,
          title: '管理员'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: _import('account/role'),
        meta: {
          auth: true,
          title: '角色管理'
        }
      },
      {
        path: 'stuAdmin',
        name: 'stuAdmin',
        component: _import('certManger/stu'),
        meta: {
          auth: true,
          title: '学生审核认证'
        }
      },
      {
        path: 'certData',
        name: 'certData',
        component: _import('certManger/stuData'),
        meta: {
          auth: true,
          title: '认证统计'
        }
      },
      {
        path: 'readData',
        name: 'readData',
        component: _import('read/data'),
        meta: {
          auth: true,
          title: '晨读数据'
        }
      },
      {
        path: 'readGrade',
        name: 'readGrade',
        component: _import('read/grade'),
        meta: {
          auth: true,
          title: '晨读成绩'
        }
      },
      {
        path: 'readRecord',
        name: 'readRecord',
        component: _import('read/record'),
        meta: {
          auth: true,
          title: '晨读记录'
        }
      },
      {
        path: 'readRule',
        name: 'readRule',
        component: _import('read/rule'),
        meta: {
          auth: true,
          title: '晨读规则'
        }
      },
      {
        path: 'readtheme',
        name: 'readtheme',
        component: _import('read/theme'),
        meta: {
          auth: true,
          title: '晨读主题'
        }
      },
      {
        path: 'runRule',
        name: 'runRule',
        component: _import('run/rule'),
        meta: {
          auth: true,
          title: '跑步规则'
        }
      },
      {
        path: 'runRecord',
        name: 'runRecord',
        component: _import('run/record'),
        meta: {
          auth: true,
          title: '运动记录'
        }
      },
      {
        path: 'runGrade',
        name: 'runGrade',
        component: _import('run/grade'),
        meta: {
          auth: true,
          title: '运动成绩'
        }
      },
      {
        path: 'runFree',
        name: 'runFree',
        component: _import('run/free'),
        meta: {
          auth: true,
          title: '免跑名单'
        }
      },
      {
        path: 'runReport',
        name: 'runReport',
        component: _import('run/report'),
        meta: {
          auth: true,
          title: '举报记录'
        }
      },
      {
        path: 'runData',
        name: 'runData',
        component: _import('run/data'),
        meta: {
          auth: true,
          title: '跑步数据'
        }
      },
      {
        path: 'exam',
        name: 'exam',
        component: _import('setting/exam'),
        meta: {
          auth: true,
          title: '学期设置'
        }
      },
      {
        path: 'icon',
        name: 'icon',
        component: _import('setting/icon'),
        meta: {
          auth: true,
          title: '学校图标'
        }
      },
      {
        path: 'setLog',
        name: 'setLog',
        component: _import('setting/log'),
        meta: {
          auth: true,
          title: '操作日志'
        }
      },
      {
        path: 'sportLog',
        name: 'sportLog',
        component: _import('setting/sportLog'),
        meta: {
          auth: true,
          title: '运动记录日志'
        }
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
