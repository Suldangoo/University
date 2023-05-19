using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameDirector : MonoBehaviour
{
    int score = 0;
    Text scoreText; // Score 오브젝트의 Text 컴포넌트를 할당할 변수

    void Start()
    {
        // Text 컴포넌트를 Find하여 할당
        scoreText = GameObject.Find("Score").GetComponent<Text>();
    }

    public void ScoreUp()
    {
        score += 10; // 점수 증가
        scoreText.text = "점수 : " + score + "점"; // 텍스트 수정
    }
}