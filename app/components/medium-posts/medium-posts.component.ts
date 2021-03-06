import { Component, OnInit } from "@angular/core";
import { MediumPost } from "../../models/medium-post";
import { MediumService } from "../../services/medium.service";

@Component({
    moduleId: module.id,
    selector: "medium-posts",
    templateUrl: "medium-posts.component.html",
    styleUrls: ["medium-posts.component.css"]
})

export class MediumPostsComponent implements OnInit {
    title = "Latest posts from Medium";
    posts: MediumPost[];

    constructor(private mediumService: MediumService) { }

    getPosts(): void {
        this.mediumService.getPosts().then(posts => this.posts = posts);
    }

    ngOnInit(): void {
        this.getPosts();
    }
}
