# 优化分析过程
1. 因为是todolist，含有一个列表，因此当列表的栏数较多时，可能会造成一定的加载阻塞，降低用户的体验。因此打算引入一个虚拟列表进行优化。
2. 当前的todolist的背景较为单一，并且并没有加入导入图片的功能。因此在后续的迭代过程中，如果加入这项功能的话，可以使用骨架屏进行一定的优化。并可以使用loding：lazy对图片的加载进行优化。
3. 后续还可以利用包拆分工具，对整个的框架进行优化。
4. css后续还可以使用transform来替代position。
