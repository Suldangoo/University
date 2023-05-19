using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Target : MonoBehaviour
{
    private void OnCollisionEnter(Collision other)
    {
        // 밤송이가 충돌했을 때, GameDirector을 찾아 점수 증가 메서드 실행
        GameObject.Find("GameDirector").GetComponent<GameDirector>().ScoreUp();
    }
}