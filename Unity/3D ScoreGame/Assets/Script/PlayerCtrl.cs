﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class PlayerCtrl : MonoBehaviour
{
    Rigidbody rigid;
    public float jumpForce = 250.0f; // 점프력
    public float walkForce = 5.0f; // 이동속도

    GameObject item;
    public int score = 0; // 총 점수

    void Start()
    {
        this.rigid = GetComponent<Rigidbody>();
        this.item = GameObject.Find("Score");
    }

    void Update()
    {
        // 점프한다
        if(Input.GetKeyDown(KeyCode.Space) && this.rigid.velocity.y == 0.0f) {
            this.rigid.AddForce(transform.up * this.jumpForce);
        }

        // // 상하좌우 이동
        int key = 0;

        if(Input.GetKey(KeyCode.RightArrow)) {
            key = 1;
            this.rigid.AddForce(transform.right * key * this.walkForce);
        }

        if(Input.GetKey(KeyCode.LeftArrow)) {
            key = -1;
            this.rigid.AddForce(transform.right * key * this.walkForce);
        }

        if(Input.GetKey(KeyCode.UpArrow)) {
            key = 1;
            this.rigid.AddForce(transform.forward * key * this.walkForce);
        }

        if(Input.GetKey(KeyCode.DownArrow)) {
            key = -1;
            this.rigid.AddForce(transform.forward * key * this.walkForce);
        }

        // 재시작 버튼
        if (Input.GetKeyDown(KeyCode.R)) {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
    }

    void OnTriggerEnter(Collider other) {
        score += 10;

        if (score >= 0) {
            this.item.GetComponent<Text>().text = "Score : " + score.ToString();
        }

        Destroy(other.gameObject);
    }
}