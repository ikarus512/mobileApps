### disabling pre-commit hook
comment out line inside file repo\.git\hooks\pre-commit


### undo file change
https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git
git reset --hard   ### without saving to stash


### get back to one commit to see diff with last version
git stash
git reset HEAD~  ### one commit back
git stash apply
git pull


### cherry-pick one comit to my branch
https://stackoverflow.com/questions/9339429/what-does-cherry-picking-a-commit-with-git-mean
1) Make sure you are on the branch you want to apply the commit to.
 git checkout master
2) Execute the following:
 git cherry-pick <commit-hash>
3) copy comment:
 git notes copy FROM TO



### merge
https://stackoverflow.com/questions/5601931/what-is-the-best-and-safest-way-to-merge-a-git-branch-into-master
(merge to master)
git checkout master
git pull
git checkout test
git pull
git rebase -i master
git checkout master
git merge test

### update my branch from develop
git merge develop
or
git merge origin/develop --no-edit -m "merge from develop to feature/MERA-1582"
manual resolve
git add ...
git commit -m "merge from develop to feature/MERA-1582"


# private key
 ssh-keygen -t rsa
 ssh-add path-to-private-key
 git config --local --add core.sshCommand 'ssh -i ~/.ssh/my_key'


# https instead of git
 git config --global url."https://git.yoctoproject.org/git".insteadOf git://git.yoctoproject.org
 git config --global url."https://".insteadOf git://
 undo:
 git config --global --unset url."https://git.yoctoproject.org/git".insteadOf
 git config --global --unset url."https://".insteadOf
 git proxy
 git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port>


