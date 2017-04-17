import { Injectable } from '@angular/core'

@Injectable()
export class YoutubeService{
    public getVideoID(url: string): string{
        if(url){
            var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return match[2];
            } 
        }

        return null;
    }

    public getThumbnailURL(videoURL: string): string{
        if(videoURL){
            let videoId = this.getVideoID(videoURL);
            if(videoId){
                return "https://img.youtube.com/vi/" + videoId + "/0.jpg";
            }
        }

        return null;
    }

    public getEmbedURL(videoURL: string): string{
        if(videoURL){
            let videoId = this.getVideoID(videoURL);
            if(videoId){
                return "https://www.youtube.com/embed/" + videoId;
            }            
        }

        return null;
    }
}