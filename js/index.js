    const linksSocialMedia = {
      github: 'werikisxavier',
      instagram: 'werikisxavier',
      facebook: 'werikis.xavier',
      youtube: 'UCvG8Ap6M8l0L80LvHA3wI1w'
    }

    function changeSocialMediaLinks() {
      for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        if (social == 'youtube') {
          li.children[0].href = `https://${social}.com/channel/${linksSocialMedia[social]}`
        }
      }
    }

    changeSocialMediaLinks()


    function getGitHubProfileInfos() {
      const urlGitHub = `https://api.github.com/users/${linksSocialMedia.github}`

      fetch(urlGitHub).then(respose => respose.json())
                      .then(data => {

                        userName.textContent = data.name;
                        bio.textContent = data.bio;
                        //personalPhoto.src = data.avatar_url;
                      })

    }

    getGitHubProfileInfos()