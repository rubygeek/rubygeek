# SuperApp

Watched along with: 

https://www.youtube.com/watch?v=Gdf8JXeaPjw


{:ok, super_pid} = BasicSuper.start_link

[four, three, two, one] = Supervisor.which_children(super_pid)

{_, one_pid, _, _} = one

Process.alive?(one_pid)



