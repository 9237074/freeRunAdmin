// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '学生管理',
    icon: 'folder-o',
    children: [
      { path: '/stuData', title: '学生信息管理' },
      // { path: '/erroData', title: '学生异常信息' }
    ]
  },
  // {
  //   title: '认证管理',
  //   icon: 'folder-o',
  //   children: [
  //     { path: '/stuAdmin', title: '学生审核认证' },
  //     { path: '/certData', title: '认证统计' }
  //   ]
  // },
  {
    title: '账号管理',
    icon: 'folder-o',
    children: [
      { path: '/admin', title: '管理员' }
      // { path: '/role', title: '角色管理' }
    ]
  },
  {
    title: '系统设置',
    icon: 'folder-o',
    children: [
      { path: '/exam', title: '学期设置' },
      { path: '/icon', title: '学校图标' }
      // { path: '/setLog', title: '操作日志' },
      // { path: '/sportLog', title: '运动记录日志' }
    ]
  },
  {
    title: '跑步管理',
    icon: 'folder-o',
    children: [
      { path: '/runRule', title: '跑步规则' },
      { path: '/runRecord', title: '运动记录' },
      { path: '/runGrade', title: '运动成绩' },
      // { path: '/runFree', title: '免跑名单' },
      // { path: '/runReport', title: '举报记录' },
      { path: '/runData', title: '数据统计' }
    ]
  },
  {
    title: '晨读管理',
    icon: 'folder-o',
    children: [
      { path: '/readtheme', title: '晨读主题' },
      { path: '/readRule', title: '晨读规则' },
      { path: '/readRecord', title: '晨读记录' },
      { path: '/readGrade', title: '晨读成绩' },
      { path: '/readData', title: '数据统计' }
    ]
  }
]
