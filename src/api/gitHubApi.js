import { Octokit } from "@octokit/core";
import {setCodeExample} from '../redux/reducers/mainReducer'
import {setGitHubFileLink,setGitHubFileName} from '../redux/reducers/aboutPageReducer'

let octokit = new Octokit()

let fetchCodeExample = (dispatch,repo,file) => {

    octokit.request(`GET /repos/nessaj9698/${repo}/contents/${file}`).then(response => {
        dispatch(setGitHubFileName(response.data.name))
        dispatch(setGitHubFileLink(response.data.html_url))
        dispatch(setCodeExample(response.data.content))
      
    })
}

export default fetchCodeExample